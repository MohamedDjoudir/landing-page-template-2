import type React from "react"

export interface MenuItem {
    icon: React.ReactNode
    title: string
    description: string
    href: string
}

export interface MenuColumn {
    title: string
    items: MenuItem[]
}

export interface FeaturedItem {
    title: string
    description: string
    ctaText: string
    ctaLink: string
    imageSrc: string
}

export interface MegaMenuData {
    title: string
    columns: MenuColumn[]
    featured: FeaturedItem
}

export interface Feature {
    title: string
    description: string
    icon: React.ReactNode
}

export interface PricingPlan {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
}

export interface Testimonial {
    quote: string
    author: string
    role: string
    avatar: string
}

export interface BlogArticle {
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
}

export interface Step {
    number: string
    title: string
    description: string
    color: string
    image: string
    icon?: string
}

export interface Integration {
    name: string
    category: string
    logo: string
}

export interface FAQ {
    question: string
    answer: string
}

export interface Company {
    name: string
    logo: string
}

export interface Stat {
    value: string
    label: string
}
