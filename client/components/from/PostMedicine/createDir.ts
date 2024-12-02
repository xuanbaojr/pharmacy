'use sever'
import fs from 'fs';
import path from 'path';

/**
 * Tạo tệp từ file đầu vào và đường dẫn
 * @param {Buffer} inputFile - Tệp đầu vào dưới dạng Buffer
 * @param {string} outputPath - Đường dẫn nơi tệp sẽ được lưu
 */


// Ví dụ sử dụng
const exampleInputFile: Buffer = fs.readFileSync('./duongdan/tenfile.txt'); // Đọc tệp đầu vào
const outputPath: string = './duongdan/tenfile_moi.txt'; // Đường dẫn nơi tệp sẽ được lưu

// createFile(exampleInputFile, outputPath);
