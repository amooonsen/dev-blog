import React from 'react'

// components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  return (
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
  )
}
