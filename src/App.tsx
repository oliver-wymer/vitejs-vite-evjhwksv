import React, { useState } from 'react';
import { Theme, Header, HeaderMenuButton, HeaderName, HeaderGlobalBar, HeaderGlobalAction, SideNav } from "@carbon/react";
import { UserAvatar } from "@carbon/icons-react";

export default function App() {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  return (
    <div>
      <Theme theme="g100">
        <Header aria-label="IBM Platform Name">
          {/* <SkipToContent /> */}
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
            onClick={() => {}}
            isActive={isSideNavExpanded}
            aria-expanded={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="IBM">
            Event Automation - Event Streams
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction tooltipAlignment="start" aria-label="Help">
              <UserAvatar />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            onOverlayClick={() => setIsSideNavExpanded(true)}
            href="#main-content"
            isRail
          >
            {/* <SideNavLinks /> */}
          </SideNav>
        </Header>
      </Theme>

      <main style={{ marginLeft: "3rem", marginTop: "3rem" }}>
        <h1>Hey</h1>
      </main>
    </div>
  );
}
