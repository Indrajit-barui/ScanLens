const questions = [

  // CATEGORY 1: JOB SCAMS (10 QUESTIONS)


  {
    category: "job-scams",
    question: "A recruiter asks you to pay ₹1,999 as a registration fee before offering you a job. What should you do?",
    options: [
      "Pay immediately to secure the job",
      "Verify the recruiter independently and treat the fee request as suspicious",
      "Share your bank details",
      "Borrow money to pay the fee"
    ],
    correctAnswer: 1,
    explanation: "An upfront recruitment fee is a warning sign. Verify the employer using independently obtained official contact details."
  },
  {
    category: "job-scams",
    question: "You receive a job offer without an interview and are promised an unusually high salary. What is the safest response?",
    options: [
      "Accept immediately",
      "Send your identity documents immediately",
      "Verify the company, job listing, and recruiter independently",
      "Pay for a guaranteed appointment letter"
    ],
    correctAnswer: 2,
    explanation: "An unusually generous offer without a proper selection process deserves careful verification."
  },
  {
    category: "job-scams",
    question: "A recruiter contacts you using a free email account instead of an apparent company email. What should you do?",
    options: [
      "Verify the recruiter's identity through the company's official website",
      "Trust the recruiter because they know your name",
      "Send your bank account password",
      "Pay a verification fee"
    ],
    correctAnswer: 0,
    explanation: "A personal email address is not proof of fraud, but you should independently verify the recruiter before sharing information."
  },
  {
    category: "job-scams",
    question: "A work-from-home job promises large daily earnings for almost no work and asks for an upfront payment. What is the biggest warning sign?",
    options: [
      "The job can be done from home",
      "The company has an application form",
      "The recruiter explains the working hours",
      "Guaranteed high earnings combined with an upfront payment"
    ],
    correctAnswer: 3,
    explanation: "Unrealistic earnings promises combined with upfront fees are common warning signs of job scams."
  },
  {
    category: "job-scams",
    question: "A recruiter sends you a link to an unfamiliar website to upload your Aadhaar and PAN details before you can verify the job. What should you do?",
    options: [
      "Upload everything immediately",
      "Verify the employer and website independently before sharing sensitive documents",
      "Share your banking OTP too",
      "Post your documents publicly"
    ],
    correctAnswer: 1,
    explanation: "Verify the website and the employer before sharing sensitive identity information."
  },
  {
    category: "job-scams",
    question: "A supposed employer sends you a cheque and asks you to buy equipment from their recommended vendor. What should you do?",
    options: [
      "Buy the equipment immediately",
      "Transfer the money before checking the cheque",
      "Verify the cheque and employer independently before spending or transferring money",
      "Share your internet banking password"
    ],
    correctAnswer: 2,
    explanation: "Fake-cheque employment scams can leave victims responsible when a cheque is later rejected."
  },
  {
    category: "job-scams",
    question: "A recruiter says you must pay today or permanently lose your job offer. What should you do?",
    options: [
      "Pay because the deadline is urgent",
      "Take a loan immediately",
      "Send money to a personal account",
      "Pause and independently verify the offer instead of acting under pressure"
    ],
    correctAnswer: 3,
    explanation: "Artificial urgency can pressure people into making unsafe decisions without verification."
  },
  {
    category: "job-scams",
    question: "A company asks you to complete a small unpaid assessment related to the advertised role. What should you consider first?",
    options: [
      "Check whether the assessment is reasonable and the employer is legitimate",
      "Assume every assessment is a scam",
      "Send money to receive the assessment",
      "Give the recruiter your email password"
    ],
    correctAnswer: 0,
    explanation: "Some legitimate employers use assessments. Verify the employer and be cautious of excessive unpaid work or payment demands."
  },
  {
    category: "job-scams",
    question: "A recruiter asks you to receive money in your bank account and transfer it to another person as part of your new job. What should you do?",
    options: [
      "Accept because it is your first job",
      "Refuse and independently verify the employer; do not move suspicious funds",
      "Transfer the money immediately",
      "Share your debit card and PIN"
    ],
    correctAnswer: 1,
    explanation: "Moving money for strangers can expose you to fraud and money-laundering risks."
  },
  {
    category: "job-scams",
    question: "You discover that a job listing uses a real company's name, but the company says it never posted the vacancy. What should you do?",
    options: [
      "Continue because the logo looks genuine",
      "Pay the recruiter to investigate",
      "Stop communicating with the suspected impersonator and report the listing",
      "Send additional identity documents"
    ],
    correctAnswer: 2,
    explanation: "Scammers can impersonate real companies. Follow up through the company's verified contact channels and report suspicious listings."
  },


  // CATEGORY 2: BANKING SCAMS (10 QUESTIONS)


  {
    category: "banking-scams",
    question: "Someone calls claiming to be from your bank and asks for your OTP. What should you do?",
    options: [
      "Share it if the caller knows your name",
      "Share only the first few digits",
      "Ask the caller to send another OTP",
      "Never disclose the OTP and contact your bank through official channels"
    ],
    correctAnswer: 3,
    explanation: "Never disclose banking OTPs to callers. Contact your bank using its official app or a verified phone number."
  },
  {
    category: "banking-scams",
    question: "You receive an SMS saying your bank account will be blocked unless you click a link and update your KYC immediately. What should you do?",
    options: [
      "Click the link immediately",
      "Check your account through the official banking app or verified website",
      "Enter your card PIN on the linked page",
      "Forward the message to friends"
    ],
    correctAnswer: 1,
    explanation: "Unexpected urgent KYC messages may be phishing attempts. Verify account notices through official banking channels."
  },
  {
    category: "banking-scams",
    question: "A caller claims they need your debit card PIN to reverse an unauthorized transaction. What should you do?",
    options: [
      "Never disclose your PIN and contact the bank directly",
      "Share the PIN if the caller sounds professional",
      "Send a photo of both sides of your card",
      "Share your internet banking password"
    ],
    correctAnswer: 0,
    explanation: "Your bank does not need your PIN to reverse a transaction. Contact the bank through a verified channel."
  },
  {
    category: "banking-scams",
    question: "You notice an unfamiliar debit in your bank statement. What should you do first?",
    options: [
      "Ignore it until next month",
      "Post your account details on social media",
      "Contact your bank through official channels and report the transaction promptly",
      "Give a stranger remote access to your phone"
    ],
    correctAnswer: 2,
    explanation: "Report unfamiliar transactions promptly so your bank can investigate and advise you on securing your account."
  },
  {
    category: "banking-scams",
    question: "Someone asks you to install a screen-sharing app so they can help fix your banking problem. What should you do?",
    options: [
      "Install it and open your banking app",
      "Share your screen and enter your PIN",
      "Give the person your phone unlock code",
      "Decline and contact your bank using a verified support channel"
    ],
    correctAnswer: 3,
    explanation: "Remote-access and screen-sharing tools can expose sensitive information. Do not grant access to an unverified caller."
  },
  {
    category: "banking-scams",
    question: "You receive a message saying you have won a bank reward, but you must pay a processing fee to claim it. What should you do?",
    options: [
      "Pay the fee immediately",
      "Verify the offer independently and do not pay to claim an unexpected prize",
      "Share your card PIN",
      "Send your OTP to the sender"
    ],
    correctAnswer: 1,
    explanation: "Unexpected prizes that require advance payments are a warning sign. Verify the offer through official channels."
  },
  {
    category: "banking-scams",
    question: "A stranger offers to help you at an ATM and asks for your PIN. What is the safest action?",
    options: [
      "Decline the help and keep your PIN private",
      "Tell the person your PIN but cover the keypad",
      "Hand over your card",
      "Allow the stranger to complete the transaction alone"
    ],
    correctAnswer: 0,
    explanation: "Never disclose your PIN or hand your card to a stranger. Seek help from verified bank staff if needed."
  },
  {
    category: "banking-scams",
    question: "You receive a UPI collect request asking you to approve it to receive money. What should you remember?",
    options: [
      "Approving every request is safe",
      "Entering a PIN is always necessary to receive money",
      "Approving a collect request may authorize a payment from your account",
      "The request is safe if it contains your name"
    ],
    correctAnswer: 2,
    explanation: "Review UPI collect requests carefully. Approving a request and entering your PIN can authorize a payment."
  },
  {
    category: "banking-scams",
    question: "A caller claims to be from the bank's fraud department and asks you to transfer your money to a safe account. What should you do?",
    options: [
      "Transfer the money immediately",
      "Ask the caller for their personal UPI ID",
      "Share your OTP before transferring",
      "Do not transfer money and independently contact your bank"
    ],
    correctAnswer: 3,
    explanation: "A demand to move money to a supposed safe account is a major warning sign. Verify the claim with your bank directly."
  },
  {
    category: "banking-scams",
    question: "You receive a bank alert containing a transaction you did not make. What should you do?",
    options: [
      "Reply with your card PIN",
      "Use official banking channels to report the transaction and secure your account",
      "Click any link in the alert without checking it",
      "Wait several weeks before reporting it"
    ],
    correctAnswer: 1,
    explanation: "Report suspicious transactions promptly using verified banking channels. Avoid links in unexpected messages."
  },


  // CATEGORY 3: INVESTMENT SCAMS (10 QUESTIONS)


  {
    category: "investment-scams",
    question: "Someone guarantees that you will double your money in seven days with no risk. What should you do?",
    options: [
      "Invest all your savings",
      "Borrow money to invest",
      "Treat the guarantee as a serious warning sign and independently verify the opportunity",
      "Invite friends before checking the company"
    ],
    correctAnswer: 2,
    explanation: "Guaranteed extraordinary returns with no risk are a major warning sign. All investments carry some risk."
  },
  {
    category: "investment-scams",
    question: "An online investment group shows impressive profits but requires a large deposit before you can withdraw anything. What should you do?",
    options: [
      "Deposit more money to unlock withdrawals",
      "Pause, avoid further payments, and investigate the platform independently",
      "Borrow money to meet the deposit requirement",
      "Recruit friends to help unlock the funds"
    ],
    correctAnswer: 1,
    explanation: "Advance payments demanded to release supposed profits can indicate an investment scam."
  },
  {
    category: "investment-scams",
    question: "An influencer promotes an unfamiliar investment and says everyone is buying it. What should you do?",
    options: [
      "Research the investment, its risks, and the provider independently",
      "Invest because the influencer is popular",
      "Use borrowed money without researching",
      "Ignore all information about fees and risks"
    ],
    correctAnswer: 0,
    explanation: "Popularity and endorsements do not establish legitimacy. Research the investment and understand its risks."
  },
  {
    category: "investment-scams",
    question: "A stranger on social media offers private investment tips and asks you to send cryptocurrency to their wallet. What should you do?",
    options: [
      "Send a small amount to test the stranger",
      "Share your crypto wallet recovery phrase",
      "Borrow cryptocurrency to participate",
      "Do not send funds or disclose wallet credentials; independently verify the offer"
    ],
    correctAnswer: 3,
    explanation: "Unsolicited investment offers can be fraudulent. Never share your recovery phrase or send money to an unverified person."
  },
  {
    category: "investment-scams",
    question: "A trading platform displays large profits, but you cannot independently verify its company details or regulatory status. What should you do?",
    options: [
      "Assume the displayed profits are genuine",
      "Verify the provider and its registration with the relevant official regulator before investing",
      "Pay an agent to guarantee your returns",
      "Share your account password with the platform promoter"
    ],
    correctAnswer: 1,
    explanation: "Verify the provider through official regulatory resources and remember that displayed profits may be misleading."
  },
  {
    category: "investment-scams",
    question: "An investment promoter says you must recruit five friends before receiving any returns. What should you consider?",
    options: [
      "Recruit everyone immediately",
      "Pay more to become a senior member",
      "Treat recruitment-dependent rewards as a warning sign and examine how the investment actually generates returns",
      "Use your family's savings without telling them"
    ],
    correctAnswer: 2,
    explanation: "A scheme that depends heavily on recruitment rather than genuine economic activity may be a pyramid-style scheme."
  },
  {
    category: "investment-scams",
    question: "A stranger offers to manage your investments but asks for your brokerage password and OTP. What should you do?",
    options: [
      "Never disclose credentials or OTPs; verify any adviser independently",
      "Share everything if they promise profits",
      "Give them your email password too",
      "Send a photo of your identity documents to an unknown account"
    ],
    correctAnswer: 0,
    explanation: "Credentials and OTPs can allow unauthorized account access. Verify advisers and use secure, authorized arrangements."
  },
  {
    category: "investment-scams",
    question: "A promoter claims an investment is completely risk-free because its price never falls. What should you do?",
    options: [
      "Invest your entire emergency fund",
      "Trust the claim because it sounds confident",
      "Pay a fee to receive the guarantee in writing",
      "Question the claim and examine the investment's risks and independent evidence"
    ],
    correctAnswer: 3,
    explanation: "Investment claims should be supported by credible evidence. Be suspicious of assurances that eliminate all risk."
  },
  {
    category: "investment-scams",
    question: "You are told to pay an extra tax or release fee to withdraw profits from an unfamiliar investment website. What should you do?",
    options: [
      "Keep paying every fee requested",
      "Stop making payments and independently verify the platform and the claimed obligation",
      "Borrow money to release the profits",
      "Recruit others to help pay the fee"
    ],
    correctAnswer: 1,
    explanation: "Repeated fees demanded to release supposed profits are a common warning sign of investment fraud."
  },
  {
    category: "investment-scams",
    question: "A person pressures you to invest immediately because an opportunity will supposedly disappear within minutes. What is the safest response?",
    options: [
      "Invest without reading the terms",
      "Send money to prove your interest",
      "Take time to verify the opportunity and never invest solely because of pressure",
      "Share the offer with everyone before checking it"
    ],
    correctAnswer: 2,
    explanation: "High-pressure tactics discourage careful decisions. Take time to research and understand any investment."
  },


  // CATEGORY 4: SHOPPING SCAMS (10 QUESTIONS)


  {
    category: "shopping-scams",
    question: "An unfamiliar online store sells an expensive phone at 90% off and accepts only direct bank transfers. What should you do?",
    options: [
      "Check the seller independently and use a safer payment method if you decide to buy",
      "Transfer money immediately",
      "Ignore all reviews and contact details",
      "Share your banking OTP with the seller"
    ],
    correctAnswer: 0,
    explanation: "Extreme discounts and limited payment options can be warning signs. Research the seller before purchasing."
  },
  {
    category: "shopping-scams",
    question: "A seller on social media asks you to pay in advance but refuses to provide verifiable business details. What should you do?",
    options: [
      "Pay because the seller has many followers",
      "Send twice the amount to secure delivery",
      "Avoid paying until you can verify the seller and purchase protections",
      "Share your card PIN"
    ],
    correctAnswer: 2,
    explanation: "Follower counts do not prove legitimacy. Verify the seller and understand your payment and refund protections."
  },
  {
    category: "shopping-scams",
    question: "You receive a message saying your parcel is held and you must pay a small fee through an unfamiliar link. What should you do?",
    options: [
      "Enter your card details immediately",
      "Check the shipment through the courier's official website or app",
      "Share your OTP with the sender",
      "Install an app linked in the message"
    ],
    correctAnswer: 1,
    explanation: "Fake delivery-fee messages can be phishing attempts. Verify tracking and payment requests through official courier channels."
  },
  {
    category: "shopping-scams",
    question: "An online seller asks for your OTP to process a refund. What should you do?",
    options: [
      "Share the OTP if the refund amount is small",
      "Share your banking password instead",
      "Send your card PIN",
      "Do not disclose the OTP and verify the refund through the official platform"
    ],
    correctAnswer: 3,
    explanation: "Do not disclose authentication OTPs to sellers. Verify refund procedures through the platform's official support."
  },
  {
    category: "shopping-scams",
    question: "A website has copied the logo of a famous brand, but its web address is unfamiliar. What should you do?",
    options: [
      "Check the address and navigate to the brand's official website independently",
      "Assume the website is genuine because the logo looks correct",
      "Enter your card details to test the site",
      "Download any file it offers"
    ],
    correctAnswer: 0,
    explanation: "Logos can be copied. Check the domain and use the brand's verified official website."
  },
  {
    category: "shopping-scams",
    question: "A seller asks you to leave the shopping platform and pay through a personal UPI ID to get a discount. What should you do?",
    options: [
      "Pay because the discount is attractive",
      "Send payment to multiple IDs",
      "Stay within the platform's protected payment process and check its policies",
      "Share your UPI PIN with the seller"
    ],
    correctAnswer: 2,
    explanation: "Off-platform payments may remove buyer protections and make disputes harder to resolve."
  },
  {
    category: "shopping-scams",
    question: "You find multiple independent complaints that an online store never delivers orders. What should you do?",
    options: [
      "Place a larger order",
      "Avoid purchasing until the seller's legitimacy can be established",
      "Ignore all complaints",
      "Pay using an irreversible method"
    ],
    correctAnswer: 1,
    explanation: "Repeated credible non-delivery complaints are a warning sign. Research sellers before making payments."
  },
  {
    category: "shopping-scams",
    question: "An online store asks you to install an unknown application file to track your order. What should you do?",
    options: [
      "Install it immediately",
      "Disable your phone's security protections",
      "Give the app all requested permissions",
      "Avoid installing it and track the order through the official store or courier app"
    ],
    correctAnswer: 3,
    explanation: "Unknown app files may contain malware. Use trusted official apps and websites for order tracking."
  },
  {
    category: "shopping-scams",
    question: "A seller sends you a screenshot showing that your refund has been processed, but no money appears in your account. What should you do?",
    options: [
      "Verify the transaction with your bank or the shopping platform instead of relying on the screenshot",
      "Pay a fee to receive the refund",
      "Share your OTP to complete the refund",
      "Assume the screenshot proves the payment"
    ],
    correctAnswer: 0,
    explanation: "Screenshots can be fabricated. Confirm refunds through your actual account and the platform's official support."
  },
  {
    category: "shopping-scams",
    question: "A shopping website requests your UPI PIN to send money into your account as a refund. What should you do?",
    options: [
      "Enter the PIN if the seller uses a familiar logo",
      "Send your PIN in a message",
      "Never disclose your UPI PIN; verify the refund through official channels",
      "Share the PIN with customer support"
    ],
    correctAnswer: 2,
    explanation: "Your UPI PIN authorizes payments. You do not need to disclose it to receive a refund."
  },

  // CATEGORY 5: ROMANCE SCAMS (10 QUESTIONS)


  {
    category: "romance-scams",
    question: "Someone you met online quickly declares love and asks you to send money for an emergency. What should you do?",
    options: [
      "Send money immediately",
      "Pause, verify their identity independently, and do not send money under pressure",
      "Take a loan for them",
      "Share your banking password"
    ],
    correctAnswer: 1,
    explanation: "Rapid emotional attachment followed by urgent money requests is a common romance-scam warning sign."
  },
  {
    category: "romance-scams",
    question: "Your online romantic partner repeatedly avoids live video calls and asks you to pay for travel to meet them. What should you do?",
    options: [
      "Pay for all their travel expenses",
      "Send additional money to prove your love",
      "Share your identity documents",
      "Verify their identity carefully and avoid sending money to someone you have not established is genuine"
    ],
    correctAnswer: 3,
    explanation: "Repeated avoidance of identity verification combined with money requests deserves caution."
  },
  {
    category: "romance-scams",
    question: "Someone you met on a dating app asks for intimate photos and promises to keep them private. What is the safest approach?",
    options: [
      "Remember that sharing intimate material carries privacy risks and never feel pressured to send it",
      "Send the photos because the person promised",
      "Include your identity documents in the photos",
      "Share your account passwords too"
    ],
    correctAnswer: 0,
    explanation: "Images can be copied or misused. Never feel pressured to share intimate material or identifying information."
  },
  {
    category: "romance-scams",
    question: "An online partner threatens to publish your private photos unless you send money. What should you do?",
    options: [
      "Pay repeatedly to keep them quiet",
      "Send more private photos",
      "Preserve evidence, stop paying, report the account, and seek help from appropriate authorities",
      "Give the person access to your social media"
    ],
    correctAnswer: 2,
    explanation: "This is a form of sextortion. Preserve evidence, report the threat, and seek support rather than complying with demands."
  },
  {
    category: "romance-scams",
    question: "A person you met online says they sent you a valuable gift, but you must pay customs charges to an unfamiliar account. What should you do?",
    options: [
      "Pay immediately because gifts are valuable",
      "Verify the shipment and any charges directly through the official courier or customs channels",
      "Send your banking OTP",
      "Pay whatever amount the sender requests"
    ],
    correctAnswer: 1,
    explanation: "Fake gift and delivery-fee demands are common romance-scam tactics. Verify any shipment independently."
  },
  {
    category: "romance-scams",
    question: "Your online partner asks you to invest in a cryptocurrency platform and promises guaranteed profits. What should you do?",
    options: [
      "Invest your savings to strengthen the relationship",
      "Borrow money to invest",
      "Give them your crypto recovery phrase",
      "Treat the offer cautiously and independently verify the investment before risking any money"
    ],
    correctAnswer: 3,
    explanation: "Romance scammers may use emotional trust to promote fraudulent investments. Never rely solely on a partner's claims."
  },
  {
    category: "romance-scams",
    question: "Someone you met online says their account is locked and asks you to receive and forward money for them. What should you do?",
    options: [
      "Refuse to move money for an unverified person",
      "Transfer every payment they send",
      "Share your bank account login",
      "Create accounts using your identity for them"
    ],
    correctAnswer: 0,
    explanation: "Moving funds for strangers can expose you to fraud and money-laundering risks."
  },
  {
    category: "romance-scams",
    question: "A person online claims to be a wealthy foreign professional but repeatedly requests money for medical emergencies. What should you do?",
    options: [
      "Send money because their story sounds emotional",
      "Take out a loan to help",
      "Verify their claims independently and do not send money under emotional pressure",
      "Share your banking credentials"
    ],
    correctAnswer: 2,
    explanation: "Emotional emergencies can be fabricated to obtain money. Verify claims independently and protect your finances."
  },
  {
    category: "romance-scams",
    question: "A dating-app match asks for your email password to prove that you trust them. What should you do?",
    options: [
      "Share the password temporarily",
      "Keep your password private and secure your account with strong authentication",
      "Share your recovery codes",
      "Use the same password for every account"
    ],
    correctAnswer: 1,
    explanation: "Trust does not require sharing passwords. Credentials and recovery codes can give someone control of your account."
  },
  {
    category: "romance-scams",
    question: "You suspect someone you met online is using a fake identity to request money. What should you do?",
    options: [
      "Send a larger amount to test them",
      "Threaten them with your private information",
      "Continue sending money until they explain",
      "Stop sending money, preserve evidence, and report the suspected scam"
    ],
    correctAnswer: 3,
    explanation: "Stop financial contact, preserve relevant messages and payment records, and report suspected fraud through appropriate channels."
  },


  // CATEGORY 6: OTP SCAMS (10 QUESTIONS)


  {
    category: "otp-scams",
    question: "Someone calls claiming they need your OTP to verify your identity. What should you do?",
    options: [
      "Share it if the caller sounds trustworthy",
      "Read only the first half",
      "Never disclose the OTP to the caller",
      "Send the OTP by email instead"
    ],
    correctAnswer: 2,
    explanation: "An OTP is an authentication secret. Never disclose it to an unverified caller."
  },
  {
    category: "otp-scams",
    question: "You receive an OTP even though you did not try to log in or make a transaction. What should you do?",
    options: [
      "Share it with whoever calls next",
      "Do not share it; check your account through the official service and secure it if necessary",
      "Post the OTP online",
      "Disable every security feature"
    ],
    correctAnswer: 1,
    explanation: "An unexpected OTP may indicate an attempted login or transaction. Never share it and review your account security."
  },
  {
    category: "otp-scams",
    question: "A caller asks you to read out an OTP to cancel a transaction you did not make. What should you do?",
    options: [
      "Read the OTP to cancel the transaction",
      "Share a different OTP",
      "Give the caller your card PIN too",
      "Do not share the OTP and contact the relevant service through official channels"
    ],
    correctAnswer: 3,
    explanation: "An OTP may authorize an action rather than cancel it. Verify suspicious transactions directly with the service provider."
  },
  {
    category: "otp-scams",
    question: "A stranger says they accidentally entered your phone number and asks you to forward the OTP you received. What should you do?",
    options: [
      "Do not forward the OTP to anyone",
      "Forward it because the mistake sounds genuine",
      "Send your SIM card details",
      "Share your phone unlock code"
    ],
    correctAnswer: 0,
    explanation: "The OTP could authorize access to an account. Do not forward authentication codes to strangers."
  },
  {
    category: "otp-scams",
    question: "A person claiming to be from customer support asks for an OTP sent to your phone. What is the safest response?",
    options: [
      "Share it if they know your account name",
      "Share it only during business hours",
      "Decline and contact customer support through the official app or website",
      "Send the code along with your password"
    ],
    correctAnswer: 2,
    explanation: "Never disclose OTPs to support callers. Use official channels to verify requests and resolve account issues."
  },
  {
    category: "otp-scams",
    question: "You receive a message saying your SIM will be deactivated unless you provide an OTP to an agent. What should you do?",
    options: [
      "Give the OTP immediately",
      "Contact your mobile operator through its official customer-care channels",
      "Send your banking password",
      "Install a remote-access app"
    ],
    correctAnswer: 1,
    explanation: "Threatening SIM deactivation to obtain an OTP is suspicious. Verify the claim directly with your mobile operator."
  },
  {
    category: "otp-scams",
    question: "A caller asks for an OTP to activate a supposed cash reward in your bank account. What should you do?",
    options: [
      "Share the OTP because rewards are free",
      "Share it if the reward amount is small",
      "Give the caller your UPI PIN instead",
      "Do not disclose the OTP and verify the reward through official banking channels"
    ],
    correctAnswer: 3,
    explanation: "Reward claims can be used to trick people into revealing authentication codes. Verify offers independently."
  },
  {
    category: "otp-scams",
    question: "You accidentally shared an OTP with a suspicious caller. What should you do next?",
    options: [
      "Immediately check the relevant account, contact the provider, and secure the account",
      "Ignore all further account alerts",
      "Share any new OTPs the caller requests",
      "Delete the messages and do nothing"
    ],
    correctAnswer: 0,
    explanation: "Act promptly. Check for unauthorized activity, contact the service provider, and change credentials or revoke sessions if needed."
  },
  {
    category: "otp-scams",
    question: "A message asks you to enter an OTP on a website with an unfamiliar address to prevent account suspension. What should you do?",
    options: [
      "Enter the OTP immediately",
      "Use the site if its logo looks genuine",
      "Avoid the link and check your account through the official website or app",
      "Send the OTP to the message sender"
    ],
    correctAnswer: 2,
    explanation: "Fake websites can steal authentication codes. Use the service's verified website or app instead of an unexpected link."
  },
  {
    category: "otp-scams",
    question: "Why should you never share an OTP with another person?",
    options: [
      "It only works when written on paper",
      "It may authorize a login, payment, password reset, or other sensitive action",
      "It automatically improves your account security when shared",
      "It cannot be used until the next day"
    ],
    correctAnswer: 1,
    explanation: "An OTP can authorize sensitive actions. Keeping it private helps prevent unauthorized access or transactions."
  }
];

module.exports = questions;