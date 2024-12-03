import { z } from 'zod';

// Định nghĩa schema cho tệp ảnh
const imageFileSchema = z.instanceof(File).refine((file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return validTypes.includes(file.type);
}, {
    message: "Tệp phải là ảnh (JPEG, PNG, hoặc GIF)"
});

// Định nghĩa schema cho danh sách tệp ảnh
const imageFilesSchema = z.array(imageFileSchema);

// Hàm xác thực danh sách tệp ảnh
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
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Lỗi xác thực:", error.errors);
        }
    }
};

// Ví dụ sử dụng trong một component React
const ImageUploadComponent: React.FC = () => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        validateImageFiles(files);
    };

    return (
        <div>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            <p>Chọn nhiều tệp ảnh (JPEG, PNG, GIF)</p>
        </div>
    );
};

export default ImageUploadComponent;