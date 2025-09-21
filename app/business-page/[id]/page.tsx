import { db } from "@/app/_lib/prisma"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import ServiceItem from "@/app/_components/service-item"

interface IBusinessPageProps {
  params: {
    id: string
  }
}

// Dynamic metadata based on business name
export async function generateMetadata({
  params,
}: IBusinessPageProps): Promise<Metadata> {
  const business = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  return {
    title: business?.name || "Business Details",
    description: business?.description || "Schedule your appointment with us",
  }
}

const BusinessPage = async ({ params }: IBusinessPageProps) => {
  const business = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!business) {
    return notFound()
  }

  return (
    <div>
      {/* IMAGE */}
      <div className="relative h-[250px] w-full">
        <Image
          src={business.imageUrl}
          fill
          alt={business.name}
          className="object-cover"
          priority
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
          asChild
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{business?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{business?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0 (999 reviews)</p>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">About Us</h2>
        <p className="text-justify text-sm">{business.description}</p>
      </div>

      <div className="space-y-3 p-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          Services
        </h2>
        <div className="space-y-3">
          {business.services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              barbershop={business}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusinessPage
