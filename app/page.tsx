import Header from "./_components/header"
import Image from "next/image"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
//import { Card, CardContent } from "./_components/ui/card"
//import { Badge } from "./_components/ui/badge"
//import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import { quickSearchOptions, IQuickSearchOption } from "./_constants/search"
import Link from "next/link"
import BookingItem from "./_components/booking-item"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"
/* 
import Search from "./_components/search" */
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const session = await getServerSession(authOptions)
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "bem vindo"}!
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
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option: IQuickSearchOption) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* IMAGEM */}
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

        {/* AGENDAMENTO */}
        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map((booking) => (
            <BookingItem
              key={booking.id}
              booking={JSON.parse(JSON.stringify(booking))}
            />
          ))}
        </div>

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

        {/* POPULAR */}
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
    </div>
  )
}

export default Home
