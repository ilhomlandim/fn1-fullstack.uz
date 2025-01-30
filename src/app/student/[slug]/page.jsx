"use client";
import Framer from "@/components/Framer";
import group from "@/data";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { slug } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const st = group.find((g) => g.slug == slug);
    setStudent(st);
  }, [slug]);

  if (!student)
    return (
      <div className="py-20 text-center">
        <span className="inline-block animate-spin rounded-full border-black border-t-0 border-l-0 w-10 h-10 border-2"></span>
      </div>
    );
  return (
    <div className="overflow-hidden">
      <div className="container max-w-[1280px] px-5">
        <div className="py-10 max-lg:flex-col flex min-h-screen gap-10 items-center">
          <Framer
            classes="w-[300px] aspect-square flex-shrink-0 overflow-hidden  rounded-full"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -200, opacity: 0 }}
          >
            <Image
              className="object-contain"
              alt={student.fullName}
              src={student.img}
              width={300}
              height={300}
            />
          </Framer>
          <div>
            <Framer
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
            >
              <h2 className="font-semibold text-4xl">{student.fullName}</h2>
              <p className="bg-white border-l-4 border-black p-2 mt-5">
                {student.description
                  ? student.description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque error, possimus laboriosam perspiciatis, consequuntur natus assumenda harum officia odio exercitationem, hic doloribus minima dolorem odit placeat! Rerum ipsa tempora dicta velit sint totam quod cupiditate dolor inventore explicabo, dolorem deserunt repudiandae doloribus vitae eligendi iusto veniam accusamus perferendis numquam."}
              </p>
              <ul className="flex items-center gap-5 mt-5">
                <li>
                  <a
                    href={`https://github.com/${student.socials.github}`}
                    target="_blank"
                  >
                    <GitHub fontSize="large" />
                  </a>
                </li>
                {student.socials.linkedin && (
                  <li>
                    <a
                      href={`https://linkedin.com/in/${student.socials.linkedin}`}
                      target="_blank"
                    >
                      <LinkedIn fontSize="large" />
                    </a>
                  </li>
                )}
                <li>
                  <a href={`https://t.me/${student.nickname}`} target="_blank">
                    <Telegram fontSize="large" />
                  </a>
                </li>
                {student.portfolio && (
                  <li>
                    <a
                      className="flex overflow-hidden w-12 h-12 items-center gap-2 text-lg p-2 hover:w-[140px] transition-all border rounded-full bg-white relative"
                      href={student.portfolio}
                      target="_blank"
                    >
                      <Globe size={30} />
                      <span className="absolute left-12">Portfolio</span>
                    </a>
                  </li>
                )}
              </ul>
            </Framer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
