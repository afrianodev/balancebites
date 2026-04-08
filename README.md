<h1>BalanceBites</h1>
<p><strong>BalanceBites</strong> is a nutrition app designed to help you maintain a healthier lifestyle.<br>
You can search the calories and macros of any food you type in the first section input.<br>
In the second section of the app, you can calculate your macros based on your gender, age, weight, height, and activity level.<br>
And you can get a random healthy recipe clicking in the last section.</p>
<img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzF0cDZua2lheXhvaHF2bmVwM2U3ZWE1bnU1Ymg0YWJ1b3EzdTU3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jb07WLXnyM6R7WNNHb/giphy.gif' alt='BalanceBites complete page'>
<p>You can explore the live version, which is deployed on Vercel. <strong><a href='https://balancebites.vercel.app/' target="_blank">Live Demo</a></strong></p>

<h2>Repository layout</h2>
<ul>
  <li><code>client/</code> — React (Vite) frontend</li>
  <li><code>server/</code> — Node.js API (Express)</li>
</ul>

<h2>Install &amp; run locally</h2>
<p>Prerequisites: Node.js and npm.</p>
<ol>
  <li>Clone the repository:<br>
  <pre>git clone https://github.com/afrianodev/balancebites.git</pre></li>
  <li>Open the project folder in your editor.</li>
  <li><strong>Frontend</strong> — from the repo root:<br>
  <pre>cd client
npm install
npm run dev</pre>
  Open <a href="http://localhost:5173/">http://localhost:5173/</a></li>
  <li><strong>Backend</strong> — in another terminal:<br>
  <pre>cd server
cp .env.example .env
# Edit .env: set DATABASE_URL from Supabase (Settings → Database)
npm install
npm run dev</pre>
  Base URL: <a href="http://localhost:3001/">http://localhost:3001/</a> — <code>GET /health</code><br>
  Register: <code>POST /api/auth/register</code> with JSON body <code>{ "name", "email", "password" }</code> (password ≥ 8 chars).</li>
</ol>
<p>Environment variables for the client (e.g. Calorie Ninjas) belong in <code>client/.env</code> as before (e.g. <code>VITE_CALORIES_API</code>). The API reads <code>DATABASE_URL</code> from <code>server/.env</code>.</p>
<p><strong>Server layout:</strong> <code>routes/</code> (HTTP paths), <code>controllers/</code> (request/response), <code>services/</code> (business logic + DB), <code>db/</code> (Postgres pool), <code>middleware/</code>, <code>utils/</code>.</p>

<h2>Vercel</h2>
<p>Set the project <strong>Root Directory</strong> to <code>client</code> so the frontend build runs from the Vite app. The <code>server/</code> folder is not deployed by that setting unless you add a separate Vercel project or another host for the API.</p>

<h2>Tech Stack</h2>
<ul>
  <li>React; Vite</li>
  <li>Tailwind CSS</li>
  <li>Framer Motion</li>
  <li>Express (API in <code>server/</code>)</li>
</ul>
<h2>Project Status</h2>
<p>The project is completed and live. It has been deployed and is available for use.<br>New features are being added every month.</p>
<h2>Authors</h2>
<p><a href='https://portfolio-afrianodev.vercel.app' target="_blank">Afriano</a></p>
