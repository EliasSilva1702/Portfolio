import React from "react";
import Title from "./shared/Title";
import { dataPortfolio } from "@/public/locales/en/data";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GithubIcon, LucideView } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="My Projects 💼" />

      <div className="grid md:grid-cols-2 gap-14 mt-4">
        {" "}
        {/* 2 columnas para mejor distribución */}
        {dataPortfolio.map((data) => (
          <div className="" key={data.id}>
            <h3 className="text-xl my-4">{data.title}</h3>

            {/* Contenedor de imagen */}
            <div className="relative w-full h-[300px]">
              {" "}
              {/* Ajusta la altura */}
              <Image
                src={data.image}
                alt="Project"
                fill
                quality={100} // Máxima calidad
                className="rounded-2xl object-cover"
              />
            </div>

            <p className="text-sm mt-4 mb-2">{data.description}</p> 

            <div className="flex gap-4 items-center justify-start">
              <div className="mt-5 flex gap-5">
                <Link
                  href={data.urlGithub}
                  target="_blank"
                  className={buttonVariants({ variant: "outline" })}
                >
                  GitHub
                  <GithubIcon size={20} className="ml-2" />
                </Link>
              </div>

              <div className="mt-5 flex gap-5">
                <Link
                  href={data.urlDemo}
                  target="_blank"
                  className={buttonVariants()}
                >
                  Live Demo
                  <LucideView size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
