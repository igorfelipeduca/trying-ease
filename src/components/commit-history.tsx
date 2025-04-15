"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkText from "./link-text";

type Verification = {
  verified: boolean;
  reason: string;
  signature: string | null;
  payload: string | null;
  verified_at: string | null;
};

type CommitAuthor = {
  name: string;
  email: string;
  date: string;
};

type CommitDetails = {
  author: CommitAuthor;
  committer: CommitAuthor;
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  comment_count: number;
  verification: Verification;
};

type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
};

type CommitParent = {
  sha: string;
  url: string;
  html_url: string;
};

type Commit = {
  sha: string;
  node_id: string;
  commit: CommitDetails;
  url: string;
  html_url: string;
  comments_url: string;
  author: GithubUser;
  committer: GithubUser;
  parents: CommitParent[];
};

export default function CommitHistory() {
  const [commitTree, setCommitTree] = useState<Commit[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/igorfelipeduca/trying-ease/commits",
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch commits");
        }

        const data = await response.json();
        setCommitTree(data);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchCommits();
  }, []);

  if (!commitTree.length) return null;

  return (
    <div
      className="relative w-[20rem] sm:w-[35rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {commitTree.slice(0, 5).map((commit, index) => (
          <motion.div
            key={commit.sha}
            className="w-full h-[6rem] gap-x-4 rounded-[1.5rem] flex bg-zinc-950 border border-zinc-800 p-4 items-start absolute left-0 origin-top"
            initial={{
              y: 0,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: isHovered ? 0 : index * 8,
              opacity: isHovered && index !== 0 ? 0 : 1,
              scale: 1,
              transition: {
                y: {
                  duration: 0.4,
                  ease: "easeOut",
                  delay: hasAnimatedIn
                    ? isHovered
                      ? 0
                      : index * 0.1
                    : index * 0.2,
                },
                opacity: {
                  duration: 0.3,
                  delay: hasAnimatedIn ? 0 : index * 0.2,
                },
                scale: {
                  duration: 0.4,
                  delay: hasAnimatedIn ? 0 : index * 0.2,
                },
              },
            }}
            onAnimationComplete={() => {
              if (!hasAnimatedIn) setHasAnimatedIn(true);
            }}
            style={{
              zIndex: commitTree.length - index,
            }}
          >
            <Image
              className="h-full w-auto rounded-full"
              alt={commit.committer.login}
              src={commit.committer.avatar_url}
              height={400}
              width={400}
            />

            <div className="flex flex-col gap-y-2">
              <div className="relative w-[13rem]">
                <h3 className="text-white font-medium text-lg truncate">
                  {commit.commit.message}
                </h3>
              </div>

              <div className="hidden sm:flex items-center gap-x-2">
                <div className="bg-zinc-200/30 text-white flex items-center justify-center text-xs py-1 px-2 rounded-sm font-medium">
                  {commitTree.length - index}
                </div>

                <span className="text-zinc-400 font-medium text-md">
                  Commited by{" "}
                  <span className="text-zinc-200 font-semibold">
                    {commit.committer.login}
                  </span>{" "}
                  at{" "}
                  {new Date(commit.commit.committer.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>

              <div className="flex sm:hidden">
                <span className="text-zinc-400 font-medium text-md w-[13rem] truncate">
                  Commited by{" "}
                  <span className="text-zinc-200 font-semibold">
                    {commit.committer.login}
                  </span>{" "}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative w-full flex justify-center">
        <motion.span
          className="absolute text-xl text-zinc-400 font-medium -tracking-[0.03rem]"
          animate={{
            opacity: isHovered ? 1 : 0,
            translateY: isHovered ? 130 : 0,
            transition: {
              ease: "easeOut",
              duration: 0.3,
            },
          }}
        >
          This project is{" "}
          <LinkText
            text="open-source"
            href="https://github.com/igorfelipeduca/trying-ease.git"
          />
        </motion.span>
      </div>
    </div>
  );
}
