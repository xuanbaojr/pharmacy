"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { useState } from "react"
  
class Fileme {
    file : any;
}

const imageFileSchema = z.instanceof(File).refine((file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return validTypes.includes(file.type);
}, {
    message: "Tệp phải là ảnh (JPEG, PNG, hoặc GIF)"
});

// Định nghĩa schema cho danh sách tệp ảnh
const imageFilesSchema = z.array(imageFileSchema);

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  description: z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  price : z.number().gte(1000, { message: "Số tiền không hợp lệ" }),
  files: z.array(imageFileSchema),
  stock : z.number().gte(1000, { message: "Số tiền không hợp lệ" }),
  weight : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  category : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  Ingredient : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  Indication : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  Contraindication : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  Country : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  Specification : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
  IntendedFor : z.string().min(2, {
    message: "Tên thuốc cần có trên hai chữ trở lên",
  }),
})



const PostMedicineContain = () => {
    const [filesArray, setfilesArray] = useState<File[]>()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        username: "",
        },
    })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Chỉ cập nhật state nếu giá trị là số hoặc rỗng
    if (value === '' || !isNaN(Number(value))) {
        form.setValue('price', value === '' ? 0: Number(value));
        // setNumberValue(value === '' ? undefined : Number(value));
    }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        validateImageFiles(files);
        
    };

    const validateImageFiles = (files: FileList | null) => {
        if (!files) {
            console.error("Không có tệp nào được chọn.");
            return;
        }
    
        try {
            // Chuyển đổi FileList thành mảng
            const filesArray = Array.from(files);
            imageFilesSchema.parse(filesArray);
            console.log("Tất cả tệp đều hợp lệ!", filesArray);
            let name: string =''
            filesArray.map((item) => name += ", " + item.name)
            setfilesArray(filesArray)
            form.setValue('files', filesArray)
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error("Lỗi xác thực:", error.errors);
            }
        }
    };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <div className=" px-4 py-3 mb-2 text-2xl font-bold">
            Thêm thông tin thuốc
        </div>
        <div className=" w-2/3 space-y-2 px-4 ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Mô tả</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Mô tả" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Giá tiền</FormLabel>
              <FormControl className=" flex-1 ">
                <Input type="number"
                 onKeyPress={(event) => {
                    // Ngăn chặn nhập ký tự không phải số
                    if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
                        event.preventDefault();
                    }
                }}
                value={form.getValues("price")}
                onChange={handleChange}
                placeholder="Giá tiền"  />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tồn hàng</FormLabel>
              <FormControl className=" flex-1 ">
                <Input type="number"
                 onKeyPress={(event) => {
                    // Ngăn chặn nhập ký tự không phải số
                    if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
                        event.preventDefault();
                    }
                }}
                value={form.getValues("price")}
                onChange={handleChange}
                placeholder="Tồn hàng"  />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Ảnh minh họa</FormLabel>
              <FormControl className=" flex-1 ">
                <Input type="file" accept="image/*" multiple
                onChange={handleFileChange}
                placeholder="Giá tiền"  />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Ingredient"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Indication"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Contraindication"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Country"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Specification"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="IntendedFor"
          render={({ field }) => (
            <FormItem className="flex gap-4 w-full items-center">
              <FormLabel className="flex-none w-32">Tên thuốc</FormLabel>
              <FormControl className=" flex-1">
                <Input placeholder="Tên thuốc" {...field} />
              </FormControl>
              <FormMessage className=" flex-none w-48"/>
            </FormItem>
          )}
        />

        </div>



        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PostMedicineContain
