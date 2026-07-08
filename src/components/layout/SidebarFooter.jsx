import {
    Cloud,
    HardDrive,
} from "lucide-react";

import UserAvatar from "./UseAvatar.jsx";
import currentUser from "../../constants/user.js";
import { APP_INFO } from "../../constants/app.js";

function SidebarFooter({
    collapsed,
}) {
    return (
        <footer className="border-t border-slate-200 p-4 dark:border-slate-700">
            {collapsed ? (
                <div className="flex justify-center">
                    <UserAvatar size="sm" />
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
                        <UserAvatar />

                        <div className="min-w-0">
                            <h3 className="truncate font-semibold text-slate-800 dark:text-white">
                                {currentUser.name}
                            </h3>

                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {APP_INFO.plan}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                        <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Cloud
                                    size={16}
                                    className={
                                        APP_INFO.cloudSync
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                />

                                <span className="text-sm font-medium dark:text-white">
                                    {APP_INFO.cloudSync
                                        ? "Cloud Sync"
                                        : "Offline"}
                                </span>
                            </div>

                            <span className="text-xs text-slate-500">
                                {APP_INFO.environment}
                            </span>
                        </div>

                        <div className="mb-2 flex items-center gap-2">
                            <HardDrive
                                size={15}
                                className="text-slate-400"
                            />

                            <span className="text-sm text-slate-600 dark:text-slate-300">
                                Storage
                            </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                            <div
                                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                                style={{
                                    width: `${APP_INFO.storageUsed}%`,
                                }}
                            />
                        </div>

                        <p className="mt-2 text-xs text-slate-500">
                            {APP_INFO.storageUsed}% Used
                        </p>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default SidebarFooter;