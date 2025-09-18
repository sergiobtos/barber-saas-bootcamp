import Header from "./_components/header"
import Image from "next/image"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
//import Link from "next/link"
/* 
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings" */

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  /*  const session = await getServerSession(authOptions)
  const confirmedBookings = await getConfirmedBookings() 
  */

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">
          {/* Olá, {session?.user ? session.user.name : "bem vindo"}! */}Olá!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* PESQUISA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faca sua pesquisa..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* PESQUISA RÁPIDA */}
        <div className="flex gap-3">
          <Button className="gap-2" variant="secondary">
            <Image src={"/cabelo.svg"} alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src={"/barba.svg"} alt="Barba" width={16} height={16} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src={"/acabamento.svg"}
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
        </div>

        <div className="relative h-[150px] w-full">
          <Image
            alt="Banner"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="m-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/avatar.png" />
                </Avatar>
                <p className="text-sm">Barbearia</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="m-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id}>
              <BarberShopItem barbershop={barbershop} />
            </div>
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <div key={barbershop.id}>
              <BarberShopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © Copyrights <span className="font-bold">SMS</span> Barbershop
              2025
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
