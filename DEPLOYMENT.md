# Deployment Guide

## Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL
3. Deploy automatically on push to `main`

## Backend (Railway)

1. Create a new Railway project
2. Connect your GitHub repository
3. Set environment variables
4. Deploy automatically on push to `main`

## Environment Variables

### Frontend (Vercel)
```
NEXT_PUBLIC_API_URL=https://your-api.railway.app
```

### Backend (Railway)
```
ENVIRONMENT=production
DEBUG=False
```

## Local Development

```bash
docker-compose up
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Custom Domain

1. Add your domain in Vercel/Railway dashboard
2. Update DNS records
3. SSL will be auto-provisioned
