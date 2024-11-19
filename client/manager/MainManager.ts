'use server'
import fs from 'fs';
import path from 'path';
import { IPlugin } from './plugin/IPlugin';

// const pluginRootDir = '@/manager/plugin'; // Đường dẫn đến thư mục chứa các plugin
interface Props {

}

const  MainManager = (dir: string): IPlugin[] => {
    const plugins: IPlugin[] = [];
    // Đọc tất cả các thư mục trong thư mục gốc
    const folders = fs.readdirSync(dir).filter(file => 
        fs.statSync(path.join(dir, file)).isDirectory()
    );
    // Duyệt qua từng thư mục
    folders.forEach(folder => {
        const folderPath = path.join(dir, folder);
    
        // Đọc tất cả các tệp trong thư mục
        fs.readdirSync(folderPath).forEach(file => {
            if (file === "index.tsx") {
            //     // Nhập tệp plugin
                const pluginModule : any =  require(`../Plugin/sidebar/${folder}/index.tsx`)
                
            //     // // Kiểm tra xem có lớp nào kế thừa từ Plugin không
                for (const key in pluginModule) {
                    const PluginClass = pluginModule[key];
                    if (typeof PluginClass === 'function' && 
                        PluginClass.prototype instanceof IPlugin) {
                        // Tạo thể hiện của plugin và thêm vào danh sách
                        plugins.push(new PluginClass());
                    }
                }
            }
            
            
        });
    });

    return plugins;
}

export default MainManager