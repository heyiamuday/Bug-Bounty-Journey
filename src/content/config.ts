import { defineCollection, z } from 'astro:content';

// Logs collection - Daily execution updates
const logsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        quarter: z.number().min(1).max(4),
        week: z.number().min(1).max(12),
        tags: z.array(z.string()).default([]),
        executionScore: z.number().min(0).max(10).optional(),
        description: z.string().optional(),
    }),
});

// Reviews collection - Weekly comprehensive analysis
const reviewsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        quarter: z.number().min(1).max(4),
        week: z.number().min(1).max(12),
        weekProgress: z.number().min(0).max(100),
        wins: z.array(z.string()).default([]),
        challenges: z.array(z.string()).default([]),
        nextWeekFocus: z.array(z.string()).default([]),
        description: z.string().optional(),
    }),
});

export const collections = {
    logs: logsCollection,
    reviews: reviewsCollection,
};
