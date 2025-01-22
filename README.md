# Layout Shift Bug in Next.js 15 App

This repository demonstrates a layout shift bug encountered in a Next.js 15 application involving client-side data fetching.  The bug is primarily observed when data fetching introduces a noticeable delay, leading to a jarring shift in the page layout once the data arrives.

## Bug Description

The application consists of two pages: a home page and an 'about' page. The 'about' page uses `React.useEffect` to fetch data asynchronously (simulated with a delay). During the initial render, a 'Loading...' message is displayed. Once the data is fetched, the layout shifts to accommodate the fetched content.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`. 
5. Observe the layout shift as the 'Loading...' message is replaced with the actual content.

## Solution

The provided solution addresses the layout shift by using a placeholder with the same dimensions as the final content.  This reserves space for the incoming data, preventing any unexpected shifts in the layout during the data fetching process.