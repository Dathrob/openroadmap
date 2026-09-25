spec: openroadmap/v0.1
id: backend-developer
title: Backend Developer
description: A practical path through web services, data, testing, and deployment.
subject: { id: backend-developer, title: Backend Developer, keywords: [api, web, servers] }
categories: [technology, career]
version: 1.0.0
difficulty: { from: beginner, to: advanced }
estimated_hours: 300
authorship: { type: human }
authors: [{ name: OpenRoadmap contributors }]
verification: { status: verified }
sections:
  - { id: programming, title: Programming and HTTP, order: 1, topics: [{ id: foundations, title: Programming Foundations, resources: [{ title: MDN Web Docs, provider: MDN, url: 'https://developer.mozilla.org/en-US/docs/Learn', type: documentation, format: text, cost: free, recommended: true }] }] }
  - { id: services, title: Services and Data, order: 2, depends_on: [programming], topics: [{ id: apis, title: APIs and Databases, resources: [{ title: PostgreSQL Tutorial, provider: PostgreSQL, url: 'https://www.postgresql.org/docs/current/tutorial.html', type: documentation, format: text, cost: free, recommended: true }] }] }
  - { id: production, title: Testing and Deployment, order: 3, depends_on: [services], topics: [{ id: shipping, title: Ship Reliable Services, resources: [{ title: The Twelve-Factor App, provider: Heroku, url: 'https://12factor.net/', type: documentation, format: text, cost: free, recommended: true }] }] }
