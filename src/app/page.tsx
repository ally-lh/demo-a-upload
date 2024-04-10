import Image from "next/image";
import FileUpload from "../_components/FileUpload";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black ">
      <div className="mx-auto">
        <FileUpload />
      </div>
    </main>
  );
}
