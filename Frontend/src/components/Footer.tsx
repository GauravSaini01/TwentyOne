import { InstagramIcon } from "./InstaIcon"
import { LinkedinIcon } from "./linkedin"
import { TwitterIcon } from "./Twitter"
import { GithubIcon } from "./Github"

export default function Footer() {
    return (
        <div className="bg-custom_5 h-52 flex justify-between text-custom_1">
            <div className="flex justify-center text-lg p-8">
                © 2025 TwentyOne Inc. All rights reserved.
            </div>
            <div className="m-10 flex gap-4">
                <InstagramIcon/>
                <LinkedinIcon/>
                <TwitterIcon/>
                <GithubIcon/>
            </div>
        </div>
    )
}