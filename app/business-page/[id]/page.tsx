import { db } from "@/app/_lib/prisma"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Link from "next/link"

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
    <div className="flex flex-col gap-4 p-5">
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
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{business?.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0 (999 reviews)</p>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">About Us</h2>
        <p className="text-justify text-sm">{business.description}</p>
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-bold">Services</h2>
        <div className="mt-3 flex flex-col gap-3">
          {business.services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between rounded-lg border border-solid border-gray-300 px-5 py-3"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm font-medium">
                  ${Number(service.price).toFixed(2)}
                </p>
                <button className="rounded-full bg-primary px-3 py-2 text-xs font-bold text-white">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusinessPage
