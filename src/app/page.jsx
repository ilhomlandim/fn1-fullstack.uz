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

export default function page() {
  return (
    <ul className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {group.map(
        ({ fullName, socials: { github, linkedin }, nickname, img }) => {
          return (
            <li key={fullName}>
              <Card>
                <CardHeader>
                  <Avatar className="mb-2 w-16 h-16">
                    <AvatarImage src={img} alt={nickname} />
                    <AvatarFallback>{fullName[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{fullName}</CardTitle>
                  <CardDescription>Fullstack dasturchi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Najot ta'limda o'quvchi{" "}
                    <a
                      className={buttonVariants({ variant: "link" })}
                      href={`https://t.me/${nickname}`}
                      target="_blank"
                    >
                      @{nickname}
                    </a>
                  </p>
                </CardContent>
                <CardFooter className="space-x-3">
                  <a href={`https://github.com/${github}`} target="_blank">
                    <GitHubLogoIcon />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${linkedin}`}
                    target="_blank"
                  >
                    <LinkedInLogoIcon />
                  </a>
                </CardFooter>
              </Card>
            </li>
          );
        }
      )}
    </ul>
  );
}
