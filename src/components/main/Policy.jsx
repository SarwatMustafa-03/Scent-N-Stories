import { MdPolicy } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";

const Policy = () => {
  return (
    <div className="flex justify-between gap-5 mt-20">
      <div> <MdPolicy  className="size-15"/>
        <h2>Awarded by Consumer  <br />Association of Pakistan</h2>
        <p>Consumer Association of Pakistan recognized <br /> Scents N Stories in the 17th Consumer Choice <br /> Awards</p>
      </div>

      <div><FaAward />
        <h2>15 Days Easy Returns Policy</h2>
        <p>Didn't Love What You Ordered?
          Avail returns or exchange for your online <br /> purchases within 15 days.
          For in-store exchanges only.</p>
      </div>

      <div><FaThumbsUp />
        <h2>Super Macerated Perfumes</h2>
        <p>Macerated for intensity, perfection, and deeper, longer-lasting performance.</p>

      </div>
    </div>
  )
}

export default Policy
