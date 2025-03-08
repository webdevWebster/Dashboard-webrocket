import FileGallery from "@/components/fileGallery";
import Header from "@/components/header";
import SearchSection from "@/components/header/searchSection";

export default function DashBoard() { 
    return(
        <>
            <Header />
            <SearchSection />
            <main>
                <FileGallery />
            </main>
        </>
    );
 };