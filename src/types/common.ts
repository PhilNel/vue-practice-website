export interface StaffMember {
  id: string
  name: string
  title: string
  credentials: string[]
  bio: string
  photo: string
  specialties: string[]
  yearsExperience: number
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  hours: {
    [key: string]: string // e.g., "monday": "9:00 AM - 5:00 PM"
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface Special {
  id: string
  title: string
  description: string
  discount: string
  validUntil: Date
  terms: string
  isActive: boolean
  image?: string
}

export interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  persistent?: boolean
}

export interface ApiError {
  message: string
  code: string
  details?: Record<string, any>
}

export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface MetaData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
} 