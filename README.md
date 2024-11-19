  

  

# Welcome to Pharmacy web!

  

  

  

Dự án mục đích tối ưu quy trình mua thuốc tự động theo yêu cầu. Bên cạnh cung cấp đầy đủ chức năng của website thương mại điện tử, dự án hướng đến đối tượng là người dùng lớn tuổi, không có nhiều kiến thức sử dụng công nghệ thông tin.

  

  

  

# Chức năng chính

  

  

## Luồng thứ nhất:

  

  

### Role 1: Người bệnh

  

  

- Chức năng tìm kiếm thuốc

  

  

- Xem thông tin thuốc, đặt hàng

  

  

- Đọc bài viết

  

  

- Kiểm tra tình trạng đơn hàng

  

  

### Role 2: Người bán thuốc

  

  

- Đăng thông tin thuốc

  

  

### Role 3: Người giao hàng

  

  

- Thông báo đơn hàng

  

  

- Cập nhật trạng thái đơn hàng

  

  

  

## Luồng thứ hai:

  

  

### Role 1: Người bệnh

  

  

Sau khi khám ở bệnh viện bất kì, người bệnh nhận được phiếu khám. Người bệnh upload file phiếu khám (pdf, png,...) lên hệ thống, mô hình AI tự động trích xuất tên thuốc, kiểm tra còn hàng hay không, thông báo cho người mua, nếu người mua đồng ý, hệ thống tự động lên đơn, thông báo cho phía giao hàng giao đến địa chỉ có trong phiếu khám ( người dùng chỉ cần upload phiếu khám, loại bỏ quy trình tìm kiếm, nhập thông tin cá nhân, địa chỉ,...)

  

  

  

## Chức năng bổ sung

  

  

- Chat bot

  

  

- Recommend các bài viết liên quan đến bệnh dựa vào thuốc mà bệnh nhân tìm

  

  

- Ưu tiên lên đơn dựa theo độ tuổi, độ nghiêm trọng của bệnh

  

  

# Hướng dẫn cài đặt

  

## Mô hình

  

1. Cài đặt Miniconda tại [đây](https://docs.anaconda.com/miniconda/miniconda-install/)
2. Download và  weights của mô hình tại [đây](https://drive.google.com/drive/u/0/folders/1_3EfyH1VI-LbMO5bQo2ZNltItVCPMtHx), thêm vào thư mục weights tương ứng

  

3. Chạy mô hình

  

	``` cd model ```

	```conda create -n pharmacy ```

	  

	```pip install -r requirements.txt ```

	  

	```fastapi dev main.py```
  

  

	Kiểm tra mô hình đã chạy đúng hay chưa tại http://localhost:8000/docs


4. Demo
	Kết quả mô hình xem tại [đây](https://drive.google.com/drive/u/0/folders/17q8cqpbBewHvsQ5e7LI0UT4-poGgn2hw) 


Link google docs: https://docs.google.com/document/d/1BJUBd4-zIw21jZYrJs7KtnSwb2UyWCufBy-JLrdSCtA/edit?usp=sharing