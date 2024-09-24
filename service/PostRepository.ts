// repositories/PostRepository.ts

import { IPostRepository } from './IPostRepository';
import { BaseRepository } from './BaseRepository';
import { Post, CategoryDetail } from '@/types/Post';

export class PostRepository extends BaseRepository implements IPostRepository {
  constructor() {
    super();
  }

  public async fetchPostList(category?: string): Promise<Post[]> {
    const postPaths = this.getPostFilePaths(category);
    const postPromises = postPaths.map((postPath) =>
      this.postParser.parsePost(postPath, this.POSTS_PATH)
    );
    const posts = await Promise.all(postPromises);
    return posts;
  }

  private sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  }

  public async fetchSortedPostList(category?: string): Promise<Post[]> {
    const posts = await this.fetchPostList(category);
    return this.sortPostsByDate(posts);
  }

  public async fetchAllPostCount(): Promise<number> {
    return (await this.fetchPostList()).length;
  }

  public async fetchCategoryList(): Promise<CategoryDetail[]> {
    try {
      const postList = await this.fetchPostList();
      const categoryCountMap: {
        [key: string]: number;
      } = {};

      for (const post of postList) {
        const category = post.categoryPath;
        categoryCountMap[category] = (categoryCountMap[category] || 0) + 1;
      }

      const categoryDetails: CategoryDetail[] = Object.entries(categoryCountMap).map(
        ([category, count]) => ({
          dirName: category,
          publicName: this.postParser.formatCategoryName(category),
          count,
        })
      );

      return categoryDetails;
    } catch (error) {
      console.error('카테고리 리스트 불러오기 실패', error);
      return [];
    }
  }
}

// 설명
// IPostRepository와 IPostDetailRepository 인터페이스 생성: 리포지토리의 계약을 정의하여 구현체가 인터페이스를 따르도록 합니다.
// PostParser 클래스: 게시물 파싱 로직을 한 곳에서 관리하여 중복을 제거하고 유지보수를 용이하게 합니다.
// PostRepository 클래스 수정: 게시물 리스트 관련 기능만 담당하도록 수정하였으며, PostParser를 사용하여 게시물을 파싱합니다.
// PostDetailRepository 클래스 생성: 게시물 상세 정보 가져오기 기능을 전담하며, PostParser를 사용합니다.
// 적용된 객체지향 원칙 및 패턴
// 단일 책임 원칙 (Single Responsibility Principle, SRP): 각 클래스가 하나의 책임만 가지도록 하여 코드의 응집도를 높였습니다.
// 인터페이스 분리 원칙 (Interface Segregation Principle, ISP): 클라이언트가 자신이 사용하지 않는 메서드에 의존하지 않도록 인터페이스를 분리했습니다.
// Repository 패턴: 데이터 액세스 로직을 분리하여 비즈니스 로직과의 의존성을 낮추고, 데이터 소스의 변경에 유연하게 대응할 수 있습니다.
// 의존성 역전 원칙 (Dependency Inversion Principle, DIP): 구체적인 구현이 아닌 추상화된 인터페이스에 의존하도록 하여 모듈 간 결합도를 낮췄습니다.

//
// private postParser: PostParser;
// 이 라인은 클래스 내에서 postParser라는 private 멤버 변수를 선언하고 있습니다. 타입은 PostParser이며, 이 멤버 변수는 클래스 내부에서만 접근 가능합니다.

// constructor() { this.postParser = new PostParser(); }
// 이 부분은 생성자입니다. 클래스의 인스턴스가 생성될 때 호출되며, 생성자 내부에서 postParser 멤버 변수를 초기화하고 있습니다. new PostParser()를 통해 PostParser 클래스의 새로운 인스턴스를 생성하고, 이를 this.postParser에 할당합니다.

// 왜 이렇게 하는가?

// 의존성 주입 및 구성(composition):
// PostRepository 클래스는 PostParser의 기능을 사용해야 합니다. 이를 위해 PostParser의 인스턴스를 생성하여 멤버 변수로 보관하고, 필요한 메서드를 호출합니다. 이는 **구성(composition)**을 통한 코드 재사용의 한 예입니다.

// 응집도 향상 및 결합도 감소:
// PostRepository는 게시물 데이터를 관리하고, PostParser는 게시물의 파싱 로직을 담당합니다. 두 클래스는 각자의 책임에 집중하며, PostRepository는 PostParser의 구체적인 구현에 대해 알 필요 없이 인터페이스만 알면 됩니다.

// 유지보수성 향상:
// 만약 파싱 로직이 변경되거나 확장되어야 할 경우, PostParser 클래스만 수정하면 됩니다. PostRepository는 그 영향을 최소화할 수 있습니다.

// 장단점
// 장점:
// 단일 책임 원칙(Single Responsibility Principle, SRP) 준수:

// 각 클래스가 하나의 책임만 가지게 되어 코드의 응집도가 높아집니다.
// PostParser는 파싱 로직만 담당하고, PostRepository는 데이터 접근 로직만 담당합니다.
// 코드 재사용성 증가:

// 파싱 로직이 여러 곳에서 필요하다면, PostParser 클래스를 재사용할 수 있습니다.
// 중복 코드를 제거하여 유지보수성을 높입니다.
// 유지보수성 향상:

// 파싱 로직의 변경이 필요할 때, 한 곳만 수정하면 되므로 수정 범위가 줄어듭니다.
// 각 모듈이 독립적이므로, 다른 부분에 영향을 주지 않고 변경할 수 있습니다.
// 테스트 용이성 증가:

// PostParser를 독립적으로 테스트할 수 있어 단위 테스트 작성이 용이합니다.
// Mocking을 통해 PostRepository의 테스트에서 파싱 로직을 분리할 수 있습니다.
// 가독성 및 코드 구조 개선:

// 각 파일과 클래스가 명확한 역할을 가지므로, 코드를 읽고 이해하기 쉬워집니다.
// 프로젝트의 규모가 커질수록 이러한 분리가 중요해집니다.
// 디자인 패턴 적용:

// 전략 패턴(Strategy Pattern) 등의 디자인 패턴을 적용하기 용이합니다.
// 파싱 로직이 다양해질 경우, 서로 다른 파서들을 유연하게 교체할 수 있습니다.

// 단점:
// 복잡성 증가:

// 파일과 클래스의 수가 늘어나 프로젝트 구조가 복잡해질 수 있습니다.
// 작은 규모의 프로젝트에서는 오히려 과도한 분리가 될 수 있습니다.
// 초기 개발 시간 증가:

// 구조를 분리하고 인터페이스를 정의하는 데 추가적인 시간이 필요합니다.
// 단순한 기능 구현보다 설계에 더 많은 노력이 들어갑니다.
// 오버엔지니어링(over-engineering)의 위험:

// 현재 필요하지 않은 수준으로 코드를 분리하면 유지보수가 오히려 어려워질 수 있습니다.
// 팀원들이 이러한 구조를 이해하지 못하면 협업에 장애가 될 수 있습니다.
// 의존성 관리 필요:

// 클래스 간의 의존성이 늘어나므로, 의존성 관리에 신경 써야 합니다.
// 순환 의존성(circular dependency)을 조심해야 합니다.
// 성능 영향(미미함):

// 객체 생성이 빈번하게 일어나면 (예: 다수의 PostParser 인스턴스 생성) 성능에 미세한 영향이 있을 수 있습니다.
// 그러나 일반적으로 무시해도 될 정도의 영향입니다.
