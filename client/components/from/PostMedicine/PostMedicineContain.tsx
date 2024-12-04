
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Schema for form validation
const imageFileSchema = z
  .instanceof(File)
  .refine(
    (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
    { message: "Tệp phải là ảnh (JPEG, PNG, hoặc GIF)" }
  );

const FormSchema = z.object({
  name: z.string().min(2, { message: "Tên thuốc phải có ít nhất hai ký tự." }),
  description: z.string().optional(),
  price: z.number().min(0, { message: "Giá phải lớn hơn hoặc bằng 0." }),
  stock: z.number().min(1, { message: "Số lượng phải lớn hơn hoặc bằng 1." }),
  sellerID: z.string().optional(),
  weight: z.string(),
  category: z.string(),
  ingredient: z.string().optional(),
  indication: z.string().optional(),
  contraindication: z.string().optional(),
  country: z.string(),
  specification: z.string().optional(),
  intendedFor: z.string().optional(),
  images: z.array(imageFileSchema),
});

export default function PostMedicineContain() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 1,
      sellerID: null,
      weight: "",
      category: "",
      ingredient: "",
      indication: "",
      contraindication: "",
      country: "",
      specification: "",
      intendedFor: "",
      images: [],
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images" && Array.isArray(value)) {
        value.forEach((file) => formData.append("Images", file));
      } else {
        formData.append(key, value);
      }
    });

    try {
      const result = await axios.post("http://pharmacy.com/api/IMD01", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponse(result.data);
    } catch (error : any) {
      console.error(error);
      setResponse(error.response?.data || "Có lỗi xảy ra.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên thuốc</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên thuốc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mô tả</FormLabel>
              <FormControl>
                <Textarea placeholder="Nhập mô tả" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Nhập giá" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Stock */}
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số lượng</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Nhập số lượng" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Weight */}
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trọng lượng</FormLabel>
              <FormControl>
                <Input type="string" placeholder="Nhập trọng lượng" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Danh mục</FormLabel>
              <FormControl>
                <Input placeholder="Nhập danh mục" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ingredient"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thành phần</FormLabel>
              <FormControl>
                <Input placeholder="Nhập thành phần của thuốc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="indication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chỉ định</FormLabel>
              <FormControl>
                <Input placeholder="Nhập chỉ định của thuốc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contraindication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chống chỉ định</FormLabel>
              <FormControl>
                <Input placeholder="Nhập chống chỉ định của thuốc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Xuất xứ thương hiệu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập xuất xứ của thuốc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quy cách</FormLabel>
              <FormControl>
                <Input placeholder="Nhập quy cách của sản phẩm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="intendedFor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đối tượng sử dụng</FormLabel>
              <FormControl>
                <Input placeholder="Nhập đối tương sử dụng" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Images */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ảnh</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={(e) =>
                    field.onChange(Array.from(e.target.files || []))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang xử lý..." : "Tải lên"}
        </Button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </Form>
  );
}
