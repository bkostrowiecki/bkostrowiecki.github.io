---
title: New unity project preparation checklist
slug: new-unity-project-preparation-checklist
publicationAt: 2025-03-16
tags: Unity
category: Notes
abstract: The checklist to use when starting new unity project
---


## Developers machines

- [ ] They have Git Tooling installed https://git-scm.com/downloads and https://www.sublimemerge.com/
- [ ] They have Unity Hub installed https://unity.com/download
- [ ] They have an account on GitHub
- [ ] They have Visual Studio Code
- [ ] They have .NET Framework installed
- [ ] They have .NET SDK installed https://dotnet.microsoft.com/en-us/download/visual-studio-sdks
- [ ] They have repository cloned on their hard drives
- [ ] They have repository added to Unity Hub with proper Unity version
- [ ] They have Python 3 and pip installed (for pre-commit)
- [ ] They have pre-commit installed

## Trouble shooting developers marchines

- [ ] When Intelisense does not work: https://discussions.unity.com/t/solved-is-there-a-way-to-force-unity-to-regenerate-csproj-files/785653
- [ ] Setting up VSCode development properly: https://code.visualstudio.com/docs/other/unity

## Project setup

- [ ] YamlSmartMerge is set up
- [ ] Git Ignore has Builds
- [ ] Pre-commit is configured
- [ ] Git LFS is configured
- [ ] VSCode see all files
- [ ] Project is building on Continues Integration Remote Server

## Project structure

- [ ] 3rdParty folder - for all 3rd Parties
- [ ] Art - for art assets (models, textures, only visual prefabs, like particle systems)
- [ ] ArtUI - for art assets for UI (UI textures, UI prefabs)
- [ ] Audio - for audio assets (audio files, audio mixers)
- [ ] Editor - editor scripts
- [ ] DevOps - continues delivery and deployment settings
- [ ] Gameplay - for all assets related to gameplay (scripts, prefabs with scripts)
- [ ] Resources - standard Unity resources
- [ ] Settings - settings assets
- [ ] Scenes - only scenes

## 3rd Party Assets

- [ ] NaughtAttributes - for additional inspector commands as attributes
- [ ] UnityMarkdownViewer - for writing documentation that can be read in Unity
- [ ] Nuget for Unity - for installing R3
- [ ] R3 - for Observables and Subjects
- [ ] EFlatun Scene References
- [ ] Febucci's Custom Hierarchy

## Continues Delivery

- [ ] Build on remote server (Jenkins or Github Actions)
- [ ] Discord notifications about new build (Configure in GitHub)
- [ ] Releasing builds to Steam or other distribution platform (Use Steam Pipes GUI Ex or butler)

## Check periodically

- [ ] Does the project run slow? Start using Assembly Definitions
- [ ] Do tests are needed? Install Tests. First you need to start using Assembly Definitions
- [ ] Do the GitHub CI fails? Use self-hosted Jenkins, even paid GitHub Machines don't work if the repository is too big
- [ ] Check if game runs on Steam Deck
