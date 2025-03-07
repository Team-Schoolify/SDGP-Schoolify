import Image from "next/image";
import { User } from "@heroui/user";

export function ProfileCard({ src, alt = "Profile Picture", size = 128, borderColor = "border-gray-200" }) {
    return (
        <div className={`relative rounded-full overflow-hidden bg-gray-100 ${borderColor} border-4`} 
             style={{ width: size, height: size }}>
            <Image
                src={src}
                alt={alt}
                fill
                className="rounded-full"
            />
            <User size={size} borderColor={borderColor} />
        </div>
    );
}