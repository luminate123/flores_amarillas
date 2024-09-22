"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="bg-[#D9D9D9] grid  items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="font-semibold text-3xl font-mono text-center">
          Se que no es mucho y ostentoso pero lo dibuje yo solito
        </h1>
      </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="bg-amber-300">Leelo</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle></AlertDialogTitle>
            <AlertDialogDescription>

              Sé que ayer fue el día de las rosas amarillas, no me gusta que seas espectadora hoy declaro el día de la orquídea blanca. Aunque no lo creas, la orquídea la dibuje yo, puede ser que me haya guiado de una imagen de google, pero la hice yo ehh
              <br />
              Así como las orquideas estaremos, juntitos.
              <br />
              <div className="font-semibold">
                Espero que te guste.
                <br />
                Te amo con todo mi corazón.
              </div>


            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-red-400">Te amo</AlertDialogAction>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Image
        src="/floresfinal171_1.svg"
        alt="Flor Amarilla"
        width={350}
        height={350}
      />
      <h2 className="font-semibold text-3xl font-mono text-center">
         PARA MI AMOR: ANGIE NICOLE CRUZADO RAFAEL
      </h2>
      <Button asChild className="mb-8 bg-fuchsia-500">
        <Link href="https://wa.me/message/JQPYAQJVQTLHM1">Si te gusto?</Link>
      </Button>

    </div>
  );
}