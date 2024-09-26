// components
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

// constants
import faqItems from '@/constants/faqConst';

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
            <Textarea
              id="message"
              className="resize-none"
              placeholder="요청사항을 적어 주세요."
              rows={4}
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

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
          <p className="mt-4">- Steve Jobs</p>
        </blockquote>
      </div>
    </div>
  );
}
