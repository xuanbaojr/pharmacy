"use client"

import { z } from "zod"

export const formSchema = z.object({
  yourname: z.string().min(2, {
    message: "Điền họ tên của bạn",
  }).max(50),
  email : z.string({
    required_error: "Chưa có email",
  }).email({ message: "email không hợp lệ" }),
  message : z.string().min(2, {
    message: "Đặt vấn đề với chúng tôi",
  }),

})
