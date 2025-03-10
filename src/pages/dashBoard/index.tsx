import FileGallery from "@/components/fileGallery";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchSection from "@/components/header/searchSection";
import { MarqueeDemo } from "@/components/reviewCardMarqueeContribuidor";

export default function DashBoard() { 
    return(
        <>
            <Header />
            <SearchSection />
            <main>
                <FileGallery />
            </main>
            <MarqueeDemo />
            <Footer />
        </>
    );
 };