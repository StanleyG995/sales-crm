export const formatDate = (dateTime: string | Date): string => {
    const date = new Date(dateTime)
    if (isNaN(date.getTime())) return ""
    return date.toISOString().slice(0, 10)
  }