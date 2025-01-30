import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import group from "@/data";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Telegram } from "@mui/icons-material";
import Link from "next/link";
import Framer from "@/components/Framer";
export default function page() {
  return (
    <ul className="p-5 grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {group.map(
        (
          { fullName, socials: { github, linkedin }, nickname, img, slug },
          index
        ) => {
          return (
            <li key={fullName} className="h-full">
              <Framer delay={index / 20}>
                <Card className="h-full relative pb-7">
                  <Link href={`/student/${slug}`}>
                    <CardHeader>
                      <Avatar className="mb-2 w-16 h-16">
                        <AvatarImage
                          src={img}
                          className="object-cover"
                          alt={nickname}
                        />
                        <AvatarFallback>{fullName[0]}</AvatarFallback>
                      </Avatar>
                      <CardTitle>{fullName}</CardTitle>
                      <CardDescription>Fullstack dasturchi</CardDescription>
                    </CardHeader>
                  </Link>
                  <CardContent>
                    <p>
                      Najot ta'limda o'quvchi &nbsp;
                      <a
                        style={{ padding: 0 }}
                        className={buttonVariants({ variant: "link" })}
                        href={`https://t.me/${nickname}`}
                        target="_blank"
                      >
                        @{nickname}
                      </a>
                    </p>
                  </CardContent>
                  <CardFooter className="space-x-3 absolute bottom-0">
                    <a href={`https://github.com/${github}`} target="_blank">
                      <GitHubLogoIcon />
                    </a>
                    {linkedin && (
                      <a
                        href={`https://linkedin.com/in/${linkedin}`}
                        target="_blank"
                      >
                        <LinkedInLogoIcon />
                      </a>
                    )}
                    <a href={`https://t.me/${nickname}`} target="_blank">
                      <Telegram fontSize="md" />
                    </a>
                  </CardFooter>
                </Card>
              </Framer>
            </li>
          );
        }
      )}
    </ul>
  );
}
