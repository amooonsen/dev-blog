import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const faqItems = [
    {
      question: '프론트엔드 개발자의 주요 역할은 무엇인가요?',
      answer:
        '프론트엔드 개발자는 사용자가 직접 상호작용하는 웹사이트나 애플리케이션의 인터페이스를 설계하고 구현합니다. HTML, CSS, JavaScript를 사용하여 반응형 디자인을 만들고, 사용자 경험을 최적화하는 것이 주요 역할입니다.',
    },
    {
      question: 'React와 Vue.js 중 어떤 것을 선호하시나요?',
      answer:
        '두 프레임워크 모두 장단점이 있습니다. React는 큰 커뮤니티와 유연성이 장점이며, Vue.js는 학습 곡선이 낮고 직관적입니다. 프로젝트의 요구사항과 팀의 경험에 따라 선택하는 것이 좋습니다.',
    },
    {
      question: '반응형 웹 디자인을 어떻게 구현하나요?',
      answer:
        '반응형 웹 디자인은 주로 CSS 미디어 쿼리, Flexbox, Grid 등을 사용하여 구현합니다. 또한, 뷰포트 단위(vw, vh)를 활용하고, 이미지 최적화 등을 통해 다양한 디바이스에서 최적의 사용자 경험을 제공합니다.',
    },
    {
      question: '웹 성능 최적화를 위한 팁은 무엇인가요?',
      answer:
        '웹 성능 최적화를 위해 이미지 압축, 코드 분할, 지연 로딩, 캐싱 전략 사용, CSS/JavaScript 최소화, CDN 활용 등의 기법을 사용할 수 있습니다. 또한, 성능 모니터링 도구를 활용하여 지속적으로 성능을 체크하고 개선하는 것이 중요합니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl mb-12 bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent">
          Have a question or want to work together? Get in touch!
        </p>

        <form className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Inquiry Type
            </label>
            <Select>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="job">Job Opportunity</SelectItem>
                <SelectItem value="project">Project Inquiry</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>
                <SelectItem value="question">General Question</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea id="message" placeholder="Your message here..." rows={4} />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <blockquote className="text-xl italic font-semibold text-gray-900 text-center">
          <svg
            className="w-8 h-8 text-gray-400 mb-4 mx-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>
            "The only way to do great work is to love what you do. If you haven't found it yet, keep
            looking. Don't settle."
          </p>
          <p className="mt-4">- Steve Jobs</p>
        </blockquote>
      </div>
    </div>
  );
}
