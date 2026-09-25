spec: openroadmap/v0.1
id: digital-marketing
title: Digital Marketing
description: Understand audiences, content, search, measurement, and ethical growth.
subject: { id: digital-marketing, title: Digital Marketing, keywords: [marketing, SEO, content] }
categories: [business]
version: 1.0.0
difficulty: { from: beginner, to: intermediate }
estimated_hours: 120
authorship: { type: human }
authors: [{ name: OpenRoadmap contributors }]
verification: { status: verified }
sections:
  - { id: audience, title: Audience and Strategy, order: 1, topics: [{ id: strategy, title: Marketing Strategy, resources: [{ title: Marketing and Sales, provider: MIT OpenCourseWare, url: 'https://ocw.mit.edu/search/?q=marketing', type: course, format: mixed, cost: free, recommended: true }] }] }
  - { id: channels, title: Content and Search, order: 2, depends_on: [audience], topics: [{ id: search, title: Search and Content, resources: [{ title: SEO Starter Guide, provider: Google, url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', type: documentation, format: text, cost: free, recommended: true }] }] }
  - { id: measurement, title: Measurement, order: 3, depends_on: [channels], topics: [{ id: analytics, title: Analytics and Experimentation, resources: [{ title: Analytics Academy, provider: Google, url: 'https://analytics.google.com/analytics/academy/', type: course, format: mixed, cost: free, recommended: true }] }] }
