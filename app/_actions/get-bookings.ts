import { db } from "../_lib/prisma"

;("use server")

interface GetBookingsParams {
  userId?: string
  serviceId?: string
  date?: Date
}

export const getBookings = async (params?: GetBookingsParams) => {
  return await db.booking.findMany({
    where: {
      ...(params?.userId && { userId: params.userId }),
      ...(params?.serviceId && { serviceId: params.serviceId }),
      ...(params?.date && { date: params.date }),
    },
    include: {
      service: true,
      user: true,
    },
    orderBy: {
      date: "asc",
    },
  })
}
