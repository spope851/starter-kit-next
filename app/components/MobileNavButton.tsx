"use client";
import { Button, Drawer, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TABS = ["home", "about", "services", "testimonials", "contact"]

const Route = styled(Button)`
  color: white;
  padding: 10px 20px;
  :hover {
    background-color: #999;
  }
`

export const MobileNavButton: React.FC<{active: string}> = ({ active }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const route = (r: string): void => {
      setOpen(false)
      router.push(r)
    }

    return (<>
        <button aria-label="open the menu" id="menu-button" className="hamburger hamburger--spring" type="button" onClick={() => setOpen(true)}>
            <span aria-hidden="true" className="hamburger-box">
                <span aria-hidden="true" className="hamburger-inner"></span>
            </span>
        </button>
          <Drawer
            PaperProps={{ sx: { backgroundColor: "transparent", pt: 7, px: 1 } }}
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
          >
            {TABS.map((tab) => (
              <Route
                variant={active === tab ? "contained" : "text"}
                key={tab}
                onClick={() => {
                    if (tab === "home") route("/")
                    else if (tab === "services") route("/#services")  
                    else route(`/${tab}`)}
                }
              >
                {tab}
              </Route>
            ))}
          </Drawer>
        </>
    )
}