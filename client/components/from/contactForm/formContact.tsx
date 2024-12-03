'use client'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./zodContact"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

interface Props {

}
const toastOptions = {
  autoClose: 2000,
};

const FormContact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          yourname: "",
          message: "",
        },
      })


    const  onSubmit = (values: z.infer<typeof formSchema>) => {
        toast.success("Cảm ơn bạn đã liên hệ " + form.getValues('yourname'), toastOptions);
        form.setValue('email', '')
        form.setValue('yourname', '')
        form.setValue('message', '')
        
        console.log(values)
      }
    return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6">
        <div className="">
            <span className="text-2xl font-semibold">Phản hồi với chúng tôi</span>
        </div>
        <div className="mb-4">
            <span className="text-md font-light">email của bạn sẽ được bảo mật với chúng tôi*</span>
        </div>
        <FormField
          control={form.control}
          name="yourname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Họ tên" className=" rounded-xl px-4 py-6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="email của bạn" className=" rounded-xl px-4 py-6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Vấn đề của bạn" className=" rounded-xl px-4 py-6 line-clamp-6"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button className="bg-blue-600 rounded-full text-white hover:bg-blue-400 hover:border" type="submit">liên hệ    {'  ->'} </Button>
      </form>
    </Form>

    )
}

export default FormContact