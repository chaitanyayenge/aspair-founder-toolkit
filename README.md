# Aspair founder toolkit

A small, dependency-free toolkit for the conversation before a co-founder commitment. Write a specific co-founder introduction and agree a bounded first working trial.

Built by the team behind [Aspair](https://www.aspair.in/), a co-founder finding and founder dating platform for entrepreneurs, business owners, founders and co-founders.

## What you can use

- **Co-founder brief builder:** turn your own problem, evidence, contribution, partner responsibility, availability and trial idea into editable Markdown.
- **Working-trial planner:** agree one output, two owners, a review point and explicit boundaries.
- **Printable discussion prompts:** [first conversation](docs/first-conversation.md) and [working-trial template](docs/working-trial.md).
- **Pure JavaScript functions:** import `createBrief` or `summarizeTrial` into your own local workflow.

No dependency installation, paid API, AI model, account or app membership is required. These tools organize your answers; they do not invent experience, assess compatibility or predict startup success.

## Run locally

Install Node.js 22 or newer from its official website, then run:

```sh
npm start
```

Open **http://127.0.0.1:4187**. The included server binds only to your own computer. You can also serve this folder with any static web server. To run the checks:

```sh
npm test
```

## Privacy

The browser tool does not send, save or track your input. Drafts remain in the current page until you copy or download them; refreshing clears them. Copy and download happen only when you click the corresponding button. The local server serves a fixed list of files and does not collect form submissions. If somebody hosts the tool online, their ordinary hosting logs still apply. Do not put private member conversations, financial details or credentials into a public issue or pull request.

## A useful first introduction

Instead of “technical co-founder wanted,” explain a task and a way to test working together:

> I am testing whether student club coordinators need a simpler way to update event schedules. I can own design and a small prototype. I am looking for someone who can own interviews with coordinators. I have six hours a week alongside classes. A useful first trial would be three interviews and one review session before either person commits further.

This is an illustrative example, not a real Aspair member or success story.

## More founder resources

- [Co-founder conversation worksheet](https://www.aspair.in/cofounder-fit)
- [Co-founder search playbook](https://www.aspair.in/looking-for-a-cofounder)
- [Student founder guides](https://www.aspair.in/student-founders)
- [Free startup tools](https://www.aspair.in/startup-tools)

This repository contains only the standalone toolkit and its documentation. Aspair’s member app, authentication, profiles, chats, admin portal and infrastructure are outside its scope.

## Contributing

Useful contributions include clearer prompts, accessibility fixes and reproducible bugs. See [CONTRIBUTING.md](CONTRIBUTING.md). We do not accept fake testimonials, link swaps, generated keyword lists or tracking code.

## Publication and license

This standalone toolkit is available under the [MIT License](LICENSE). You may use, modify and redistribute its code, including commercially, subject to the license notice. The license covers this toolkit only. Aspair trademarks, branding rights, proprietary member application, infrastructure and member data are excluded.

Operated by OXOBOT ROBOTICS PRIVATE LIMITED. Product support: founder@aspair.in.

