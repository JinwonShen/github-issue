import { Route, Routes } from "react-router-dom"

// 공통
import Nav from "./components/Nav"
import Header from "./Header"

import Issue from "./pages/Issue"
import CreateIssue from "./pages/CreateIssue"
import Project from "./pages/Project"
import PullRequest from "./pages/PullRequest"
import Code from "./pages/Code"
import Security from "./pages/Security"
import Actions from "./pages/Actions"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/code" element={<Code />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/project" element={<Project />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
