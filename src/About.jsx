import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        আমাদের সম্পর্কে
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        আমরা উদ্ভাবনী সমাধান প্রদানের মাধ্যমে মানুষের জীবন উন্নত করার লক্ষ্যে কাজ করি।
                    </p>
                </div>

                <div className="mt-10">
                    <div className="text-center md:grid md:grid-cols-2 md:gap-8 md:text-left">
                        <div className="mb-10 md:mb-0">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">আমাদের মিশন</h3>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                আমাদের মিশন হলো প্রযুক্তির সাহায্যে সবার জীবনে সহজতা এনে দেওয়া। আমরা প্রযুক্তির সর্বশেষ উদ্ভাবনগুলি কাজে লাগিয়ে সমাজের উন্নয়ন সাধন করতে চাই।
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">আমাদের দৃষ্টি</h3>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                আমাদের দৃষ্টি হলো একটি উদ্ভাবনী এবং টেকসই পৃথিবী গড়ে তোলা, যেখানে প্রত্যেকের জীবনমান উন্নত হবে। আমরা উদ্ভাবনের মাধ্যমে বিশ্বকে বদলে দেওয়ার স্বপ্ন দেখি।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
