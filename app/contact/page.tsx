// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ContactForm from './_components/ContactForm';

// constants
import faqItems from '@/constants/faqConst';
import privacyList from '@/constants/privacyConst';
// import termsLists from '@/constants/termsConst';

export default function ContactPage() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-purple-500 dark:from-green-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl mb-12 bg-gradient-to-r from-green-600 to-purple-500 dark:from-green-400 dark:to-indigo-400 bg-clip-text text-transparent">
          아이디어에 날개를 달아드릴 개발자, 조경문입니다.
          <br />
          프론트엔드부터 백엔드까지, 프로젝트의 모든 과정을 함께 고민하고 완성해낼 준비가 되어
          있습니다.
          <br />
          작은 디테일까지 놓치지 않는 코드로, 당신의 비전을 현실로 만들어 드릴게요!
        </p>
        <div className="mb-8">
          <dl>
            <dt>제가 했던 일을 알고 싶다면?</dt>
            <dd>
              <Button asChild>
                <a href="#none" target="_blank">
                  프로젝트 보러가기
                </a>
              </Button>
            </dd>
          </dl>
          <dl>
            <dt>구체적인 정보를 알고 싶다면?</dt>
            <dd>
              <Button asChild>
                <a href="#none" target="_blank">
                  포트폴리오 보러가기
                </a>
              </Button>
            </dd>
          </dl>
        </div>
        <ContactForm />
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
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
          <p>{'기술 오타쿠가 세상을 구한다.'}</p>
          <p className="mt-4">- Liu Wei</p>
        </blockquote>

        <div className="flex gap-4 justify-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm underline">개인정보처리방침</button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>개인정보처리방침</DialogTitle>
                <DialogDescription></DialogDescription>
                {privacyList.map((item, index) => (
                  <div key={index} className="p-2 border-t border-gray-200">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm underline">이용약관</button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>이용약관</DialogTitle>
                <DialogDescription></DialogDescription>
                {termsLists.map((item, index) => (
                  <div key={index} className="p-2 border-t border-gray-200">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </div>
  );
}
