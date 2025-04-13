FROM mcr.microsoft.com/devcontainers/base:1-noble

ENV NODE_VERSION 20.19.0
RUN \
  curl -fsSL https://deb.nodesource.com/setup_20.x \
    | bash -s --\
  && apt-get update \
  && apt-get install -y --no-install-recommends \
    "nodejs=${NODE_VERSION}-1nodesource1" \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

ENV COREPACK_VERSION 0.32.0
RUN \
  npm install -g \
    corepack@${COREPACK_VERSION} \
  && rm -rf ${HOME}/.npm

# https://github.com/nodejs/corepack/blob/aefde28a631356bfdec91795d2c60be07dbf5be3/README.md#L282
ENV COREPACK_ENABLE_STRICT 1
ENV COREPACK_ENABLE_PROJECT_SPEC 1
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT 0
