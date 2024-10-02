'use client';

import React from 'react';

// components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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

// form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({
    message: '이메일 주소를 입력해주세요.',
  }),
  inquiryType: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.enum(['job', 'project', 'collaboration', 'question'], {
      required_error: '요청사항을 선택해주세요.',
    })
  ),
  message: z
    .string()
    .min(1, {
      message: '메세지를 최소 1자 이상 입력해주세요.',
    })
    .max(150, {
      message: '메세지는 최대 150자를 초과할 수 없습니다.',
    }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      inquiryType: undefined,
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 block">Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 block">요청사항</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="job">채용 문의</SelectItem>
                  <SelectItem value="project">프로젝트 문의</SelectItem>
                  <SelectItem value="collaboration">협업 문의</SelectItem>
                  <SelectItem value="question">질문하기</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 block">문의하기</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  className="resize-none overflow-hidden"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const target = e.target as HTMLTextAreaElement;
                      const start = target.selectionStart;
                      const end = target.selectionEnd;
                      const value = target.value;
                      target.value = value.substring(0, start) + '\n' + value.substring(end);
                      target.selectionStart = target.selectionEnd = start + 1;
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormDescription className="text-right">
                {field.value.length}/150 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
