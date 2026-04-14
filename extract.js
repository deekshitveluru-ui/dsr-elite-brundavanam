import { exportImages } from 'pdf-export-images';

async function main() {
    console.log("Extracting images...");
    try {
        const images = await exportImages('C:\\Users\\velur\\Downloads\\DSR Elite Brundhavanam.pdf', 'public/pdf-images');
        console.log(`Extracted ${images.length} images.`);
    } catch(err) {
        console.error(err);
    }
}
main();
