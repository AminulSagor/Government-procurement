// app/(admin)/analytics/live-activity-feed/page.tsx
import LiveActivityFeedPageView from "./_components/LiveActivityFeedPageView";
import { liveActivityFeedDemo } from "./_data/live-activity-feed.demo";

export default function LiveActivityFeedPage() {
  return <LiveActivityFeedPageView demo={liveActivityFeedDemo} />;
}
