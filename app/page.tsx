import Header from "./_components/header"
import Image from "next/image"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
//import Link from "next/link"
/* 
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings" */

const Home = async () => {
  /*  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const confirmedBookings = await getConfirmedBookings() */

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

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faca sua pesquisa..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative h-[150px] w-full">
          <Image
            className="rounded-xl object-cover"
            src="/banner-01.png"
            fill
            alt="Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
