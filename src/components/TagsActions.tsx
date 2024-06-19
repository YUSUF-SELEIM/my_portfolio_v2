'use client';
import { useRouter } from "next/navigation";

function TagsActions({ tags }: { tags: any[] }) {
  const router = useRouter();

  const goToTagPage = (tagId: string) => {
    router.push(`/tag/${tagId}`);
  };

  return (
    <div className="md:w-1/4 md:ml-4 mx-8 py-16">
      <div className="bg-gray-950 p-4 rounded-lg shadow-lg">
        <div className="text-xl text-white mb-4">Tags</div>
        {tags.map(tag => (
          <button
            key={tag.id}
            onClick={() => goToTagPage(tag.id)}
            className="text-sm text-gray-300 px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600 mr-2 mb-2"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TagsActions