import styles from './SixBoxes.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SixBoxes(){

    const cards = [
        {
            id: 1,
            label: "Fare and Zone",
            href: "/",
            icon: "/images/icons/1_fare_and_zone_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        },
        {
            id: 2,
            label: "Schedules & Map",
            href: "/",
            icon: "/images/icons/2_schedules_and_map_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        },
        {
            id: 3,
            label: "Alert",
            href: "/",
            icon: "/images/icons/3_alert_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        },
        {
            id: 4,
            label: "Accessibility",
            href: "/",
            icon: "/images/icons/4_accessibility_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        },
        {
            id: 5,
            label: "Rider Guide",
            href: "/",
            icon: "/images/icons/5_rider_guide_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        },
        {
            id: 6,
            label: "Amenities",
            href: "/",
            icon: "/images/icons/6_amenities_edmonton_to_calgary_skytrain_line_the_chinook_line_alberta.png",
        }
    ]

    return(
        <section className={styles.section}>
            <div className={styles.grid}>
              {cards.map((card) => (
                <Link 
                  key={card.id}
                  href={card.href}
                  className={styles.card}>
                   <div>
                    <Image 
                      src={card.icon}
                      alt={card.label}
                      width={60}
                      height={60}
                    />
                   </div>
                   <div>
                    {card.label}
                   </div>
                </Link>
              ))}
            </div>
        </section>
    )
}