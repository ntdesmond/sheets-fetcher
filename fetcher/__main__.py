import asyncio
import logging

from fetcher import main

logging.basicConfig(
    format="[%(asctime)s] [%(levelname)s] %(message)s", level=logging.INFO
)

if __name__ == "__main__":
    logging.info("Launching the fetcher.")
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logging.info("Stopped.")
